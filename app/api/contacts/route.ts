import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

// GET all contacts
export async function GET() {
  try {
    console.log('Fetching contacts from database...');
    await dbConnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    console.log('Fetched contacts from database:', contacts.length);

    return NextResponse.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch contacts',
      },
      { status: 500 }
    );
  }
}

// POST - Create a new contact
export async function POST(request: NextRequest) {
  try {
    console.log('Creating a new contact...');
    await dbConnect();
    const body = await request.json();
    const { name, phone } = body;

    if (!name || !phone) {
      console.log('Name or phone missing in request body');
      return NextResponse.json(
        {
          success: false,
          error: 'Name and phone are required',
        },
        { status: 400 }
      );
    }

    const contact = await Contact.create({ name, phone });

    console.log('Created new contact:', contact);

    return NextResponse.json(
      {
        success: true,
        data: contact,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error creating contact:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : 'Failed to create contact',
      },
      { status: 400 }
    );
  }
}
