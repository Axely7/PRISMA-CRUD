import { NextResponse, NextRequest,} from 'next/server';
import {prisma} from '../../../../libs/prisma'

export async function GET(request: NextRequest, {params}: any ) {    
    const task = await prisma.task.findUnique({
        where: {
            id: +params.id
        }
    })
    return NextResponse.json(task)
}

export async function PUT(request: NextRequest, {params}: any) {

    const data = await request.json()

   const taskUpdated = await prisma.task.update({
        where: {
            id: +params.id,

        }, data
    })


    return NextResponse.json(taskUpdated)
}

export async function DELETE(request: NextRequest, {params}: any) {

    try {
        const taskRemoved = await prisma.task.delete({
            where: {
                id: +params.id
            }
        })
    
        return NextResponse.json(taskRemoved)
        
    } catch (error) {
        return NextResponse.json(error)
    }

    
}