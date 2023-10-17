import { NextResponse } from "next/server";
import {prisma} from '../../../libs/prisma'

export async function GET(){
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
}

export async function POST(request){
    const data = await request.json()
    console.log(data)
    return NextResponse.json("Creando tareas")
}