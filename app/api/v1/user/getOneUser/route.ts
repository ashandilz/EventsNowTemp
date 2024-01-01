import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return;
    }
    return NextResponse.json({ user });
  } catch (e) {
    console.log(e);
  }
}
