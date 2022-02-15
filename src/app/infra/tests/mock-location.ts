import { ILocation } from '@/app/domain/types/expo-location';

export class LocationSpy implements ILocation {
  async requestPermissions(): Promise<{ status: string }> {
    return { status: 'granted' };
  }

  async getCurrentPositionAsync(): Promise<{
    coords: { latitude: number; longitude: number };
  }> {
    return {
      coords: {
        latitude: 12,
        longitude: 12,
      },
    };
  }
}
