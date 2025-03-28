import { NextResponse } from "next/server"
import { NextApiRequest, NextApiResponse } from 'next';

//

import db from '../../../../database/cards.json'


export const GET = async (req: Request, context: { params: { id: string } }) => {
  try {

    const {id} = await context.params;
    const currentId = parseInt(id);

    if(typeof currentId !== 'number') return NextResponse.json({message:'Ошибка '}, {status:500})

    const singleCard = db.cards.find((x:any) => x.id == id)
    return NextResponse.json(singleCard, {status:200})

  } catch (error: Error | any) {

    console.log(error.message)
    return NextResponse.json({message:'error'}, {status:500})

  }
}