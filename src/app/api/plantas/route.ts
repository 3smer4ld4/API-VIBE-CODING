
import { NextResponse } from "next/server";

const plantas = [
  {
    id: "1",
    nombre: "Monstera deliciosa",
    nombreComun: "Costilla de Adán",
    categoria: "Interior",
    descripcion: "Planta tropical reconocida por sus grandes hojas verdes y perforadas.",
    imagen: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600",
  },
  {
    id: "2",
    nombre: "Echeveria elegans",
    nombreComun: "Rosa de alabastro",
    categoria: "Suculentas",
    descripcion: "Suculenta que forma rosetas compactas de hojas carnosas.",
    imagen: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600",
  },
  {
    id: "3",
    nombre: "Helianthus annuus",
    nombreComun: "Girasol",
    categoria: "Ornamentales",
    descripcion: "Planta conocida por sus grandes flores amarillas.",
    imagen: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600",
  },
  {
    id: "4",
    nombre: "Aloe vera",
    nombreComun: "Sábila",
    categoria: "Medicinales",
    descripcion: "Planta suculenta cuyas hojas contienen un gel ampliamente utilizado.",
    imagen: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    total: plantas.length,
    data: plantas,
  });
}
