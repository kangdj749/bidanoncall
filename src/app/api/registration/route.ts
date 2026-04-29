import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { getSheetsClient } from "@/lib/google-sheet-client";

export const runtime = "nodejs";

const RANGE = "client!A:H";

type RegistrationBody = {
   
  name: string;
  phone: string;
  address: string;
  service: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: RegistrationBody = await req.json();

    const {
      name,
      phone,
      address,
      service,
      message,
     
    } = body;

    if (!name)
      return NextResponse.json({ error: "Nama wajib diisi" }, { status: 400 });

    if (!phone)
      return NextResponse.json({ error: "No Telepon wajib diisi" }, { status: 400 });

    
    const id = nanoid(10);
    const createdAt = new Date().toISOString();

    const row: (string | number)[] = [
      id,
      createdAt,
      name,
      phone,
      address,
      service,
      message,
    ];

    const sheets = getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID_LP!,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("REGISTRATION ERROR:", error);
    return NextResponse.json(
      { error: "Gagal simpan pendaftaran" },
      { status: 500 }
    );
  }
}