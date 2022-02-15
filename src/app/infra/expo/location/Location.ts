import { ILocation } from '@/app/domain/types';

import * as ExpoLocation from 'expo-location';

export class Location implements ILocation {
  async requestPermissions(): Promise<{ status: string }> {
    const { status } = await ExpoLocation.requestForegroundPermissionsAsync();

    return { status };
  }

  async getCurrentPositionAsync(): Promise<{
    coords: { latitude: number; longitude: number };
  }> {
    const coords = await ExpoLocation.getCurrentPositionAsync();

    return coords;
  }
}
