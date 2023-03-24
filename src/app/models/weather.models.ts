export interface Weather {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
