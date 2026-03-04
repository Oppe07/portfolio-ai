import torch
import io
import base64
from fastapi import FastAPI, File, UploadFile
from PIL import Image, ImageDraw, ImageFont
from ultralytics import YOLO
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. Cargar el modelo YOLOv8 en la GPU Katana
# Usamos 'yolov8n.pt' (nano) que es increíblemente rápido.
device = "cuda" if torch.cuda.is_available() else "cpu"
model = YOLO('yolov8n.pt').to(device)

@app.get("/")
async def root():
    return {"message": "API de IA Activa y corriendo en GPU Katana"}


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # A. Leer imagen
    img_bytes = await file.read()
    image = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    original_size = image.size # (width, height)

    # B. Inferencia con YOLOv8 (Detectar objetos)
    # YOLO maneja el pre-procesamiento internamente
    results = model(image, device=device)
    result = results[0] # Tomamos el resultado de la única imagen

    # C. Dibujar Bounding Boxes sobre la imagen original (en la CPU)
    # Obtenemos las cajas, scores y clases detectadas
    boxes = result.boxes.xyxy.cpu().numpy() # [x1, y1, x2, y2]
    classes = result.boxes.cls.cpu().numpy()
    confidences = result.boxes.conf.cpu().numpy()
    names = model.names # Diccionario de nombres de clases (0: person, etc.)

    # Preparamos Pillow para dibujar
    draw = ImageDraw.Draw(image)
    
    # Intentar cargar una fuente más grande (opcional)
    try:
        font = ImageFont.truetype("Arial.ttf", 20)
    except IOError:
        font = ImageFont.load_default()

    # D. Iterar sobre cada detección y dibujar la caja
    count = 0
    detected_objects = []

    for box, cls, conf in zip(boxes, classes, confidences):
        # Filtro de confianza (solo mostrar detecciones > 50%)
        if conf < 0.5:
            continue
            
        x1, y1, x2, y2 = box
        label = f"{names[int(cls)]} {conf:.2f}"
        
        # Color de la caja (Verde neón para que resalte)
        color = (0, 255, 0)
        
        # Dibujar el rectángulo
        draw.rectangle([x1, y1, x2, y2], outline=color, width=4)
        
        # Dibujar la etiqueta (texto)
        draw.text((x1, y1 - 25), label, fill=color, font=font)
        
        count += 1
        detected_objects.append(names[int(cls)])

    # E. Convertir la imagen final (con cajas) a Base64
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    overlay_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

    return {
        "status": "success",
        "overlay": f"data:image/jpeg;base64,{overlay_base64}",
        "device": device,
        "detections_count": count,
        "message": f"Detección completada. Se encontraron {count} objetos."
    }