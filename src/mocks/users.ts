export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
  createdAt: string
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    role: 'admin',
    createdAt: '2024-03-10T10:00:00Z',
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    email: 'ayse@example.com',
    role: 'user',
    createdAt: '2024-03-10T11:00:00Z',
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    email: 'mehmet@example.com',
    role: 'user',
    createdAt: '2024-03-10T12:00:00Z',
  },
]
