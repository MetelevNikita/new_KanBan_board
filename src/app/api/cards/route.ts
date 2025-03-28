import { NextResponse } from "next/server";

// db

import db from '../../../database/cards.json'


export const GET = () => {
  try {

    if (!db) {
      return NextResponse.json({ message: 'No data found!' }, { status: 404 });
    }
    return NextResponse.json(db.cards, { status: 200 });

  } catch (error) {

  }
}


//


export const POST = () => {
  try {

  } catch (error) {

  }
}


//


export const DELETE = () => {
  try {

  } catch (error) {

  }
}