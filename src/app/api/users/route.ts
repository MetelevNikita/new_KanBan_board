import { NextResponse } from "next/server";
import fs from 'fs'
import path from 'path'

// db

import db from '../../../database/users.json'

// type

import { UserType } from "@/types/types";


//

export const GET =  (): NextResponse<{users: UserType[]}> | NextResponse<{ error: string}> => {
  try {

    if (!db) return NextResponse.json({ error: 'Database not available' }, { status: 400 })

    return NextResponse.json(db, { status: 200 })

  } catch (error) {
    return NextResponse.json({ 'error': 'Error loading data' }, { status: 500 })
  }
}




export const POST = async (request: Request) => {

  try {

    const newUser: UserType = await request.json()
    console.log(newUser)

    if (!newUser) return NextResponse.json({ 'error': 'Error loading data' }, { status: 400 })

    db.users.push(newUser)
    fs.writeFileSync(path.join(process.cwd(), '/src/database/users.json'), JSON.stringify(db, null, 3), 'utf8')
    return NextResponse.json({ 'success': 'Data created successfully' }, { status: 200 })


  } catch (error: Error | any) {
    console.log(Error)
    NextResponse.json({ 'error': 'Error loading data' }, { status: 500 })
  }

}


