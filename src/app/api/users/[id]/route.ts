import { NextResponse } from "next/server"
import path from "path"
import fs from 'fs'

// db

import db from '@/database/users.json'

//



export const GET = async (req: Request, context: { params: { id: string } }) => {
  try {

    if (db.users.length < 1) return NextResponse.json({ error: 'No data found' }, { status: 404 })

    const params = await context.params;
    const idUser = parseInt(params.id);
    console.log(idUser)


    const singleUser = db.users.find((x: any) => x.id == idUser)
    console.log(singleUser)

    return NextResponse.json(db.users , { status: 200 })

  } catch (error: Error | any) {
    return NextResponse.json({ error: 'Error getting data' }, { status: 500 })
  }
}



export const DELETE = async (request: Request, context: { params: { id: string } }) => {
  try {

    const { id }= await context.params;
    console.log(id)

    const newDb = db.users.filter((card) => card.id !== parseInt(id))
    fs.writeFileSync(path.join(process.cwd(), 'src/database/users.json'), JSON.stringify({ users: newDb }, null, 3))

    return NextResponse.json(db, { status: 200 })

  } catch (error: Error | any) {
    return NextResponse.json({ error: 'Error deleting data' }, { status: 500 })
  }
}