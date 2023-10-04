const mapping: Record<string, string> = {
  menus: 'menu',
  'new-tables': 'new_table',
  orders: 'order',
  reservations: 'reservation',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
