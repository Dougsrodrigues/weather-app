export interface ILocation {
  requestPermissions: () => Promise<{ status: string }>;
  getCurrentPositionAsync: () => Promise<{
    coords: { latitude: number; longitude: number };
  }>;
}
