import { ILocation } from '@/app/domain/types/expo-location';

import * as ExpoLocation from 'expo-location';

export class Location implements ILocation {
  async requestForegroundPermissionsAsync(): Promise<{ status: string }> {
    const { status } = await ExpoLocation.requestForegroundPermissionsAsync();

    return { status };
  }

  async getCurrentPositionAsync(): Promise<{
    coords: { latitude: number; longitude: number };
  }> {
    const coords = ExpoLocation.getCurrentPositionAsync();

    return coords;
  }
}
