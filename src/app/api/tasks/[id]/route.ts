import { NextResponse, NextRequest,} from 'next/server';
import {prisma} from '../../../../libs/prisma'

export async function GET(request: NextRequest, {params}) {    
    const task = await prisma.task.findUnique({
        where: {
            id: +params.id
        }
    })
    return NextResponse.json(task)
}

export async function PUT(request: NextRequest, {params}) {

    const data = await request.json()

   const taskUpdated = await prisma.task.update({
        where: {
            id: +params.id,

        }, data
    })


    return NextResponse.json(taskUpdated)
}

export async function DELETE(request: NextRequest, {params}) {

    try {
        const taskRemoved = await prisma.task.delete({
            where: {
                id: +params.id
            }
        })
    
        return NextResponse.json(taskRemoved)
        
    } catch (error) {
        return NextResponse.json(error.message)
    }

    
}