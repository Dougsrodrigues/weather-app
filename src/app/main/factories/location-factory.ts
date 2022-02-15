import { ILocation } from '@/app/domain/types/expo-location';
import { Location } from '@/app/infra/expo/location/Location';

export const makeLocation = (): ILocation => new Location();
