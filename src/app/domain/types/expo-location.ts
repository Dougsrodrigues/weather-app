export interface ILocation {
  requestForegroundPermissionsAsync: () => Promise<{ status: string }>;
  getCurrentPositionAsync: () => Promise<{
    coords: { latitude: number; longitude: number };
  }>;
}
