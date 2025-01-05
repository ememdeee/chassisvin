import { NextRequest, NextResponse } from 'next/server'
import testData from './test.json'

const API_URL = process.env.COLOR_CODE_BY_VIN_API_URL
const X_AUTH_KEY = process.env.X_AUTH_KEY
const DEBUG = process.env.DEBUG_MODE === 'true'

export async function GET(request: NextRequest) {
  
  // dev mode
  if (DEBUG) {
    console.log('Debug mode enabled, returning test data after delay');
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 second delay
    return NextResponse.json({
      interior_colors: testData.data.interior_colors || [],
      exterior_colors: testData.data.exterior_colors || [],
    })
  }

  const vin = request.nextUrl.searchParams.get('vin')

  if (!API_URL || !X_AUTH_KEY) {
    return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 })
  }

  if (!vin) {
    return NextResponse.json({ error: 'Missing VIN parameter' }, { status: 400 })
  }

  const fullUrl = API_URL.replace('{vin}', vin)

  try {
    const response = await fetch(fullUrl, {
      headers: {
        'X-AuthKey': X_AUTH_KEY,
        'User-Agent': 'API Client', // Mask the real User-Agent
        'Referer': '', // Remove the Referer header
      },
    })

    if (!response.ok) {
      console.error('API responded with status:', response.status)
      return NextResponse.json(
        { error: `API responded with status: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json({
      interior_colors: data.data.interior_colors || [],
      exterior_colors: data.data.exterior_colors || [],
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}