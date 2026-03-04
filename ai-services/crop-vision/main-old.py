import torch
import io
from fastapi import FastAPI, File, UploadFile
from PIL import Image
from torchvision import transforms
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# --- MOVER ESTO AQUÍ ARRIBA ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])
@app.get("/")
async def root():
    return {"message": "API de IA Activa y corriendo en GPU Katana"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    request_object_content = await file.read()
    image = Image.open(io.BytesIO(request_object_content)).convert("RGB")
    
    input_tensor = preprocess(image)
    input_batch = input_tensor.unsqueeze(0).to(device)
    
    return {
        "status": "success",
        "filename": file.filename,
        "device": str(device),
        "tensor_shape": list(input_batch.shape),
        "message": "Imagen procesada y enviada a la GPU correctamente"
    }