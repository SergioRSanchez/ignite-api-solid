import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { Decimal } from '@prisma/client/runtime/library'

import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { CheckInUseCase } from './check-in'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let checkInsRepository: InMemoryCheckInsRepository
let sut: CheckInUseCase // SUT (system under test) convenção para nomear a entidade que será testada
let gymsRepository: InMemoryGymsRepository

describe('Check-in use case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemoryGymsRepository()
    sut = new CheckInUseCase(checkInsRepository, gymsRepository)

    gymsRepository.items.push({
      id: 'gym-01',
      title: 'Academia Serjão dos foguetes',
      description: '',
      phone: '',
      latitude: new Decimal(0),
      longitude: new Decimal(0),
    })

    // Mock de tempo
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      userId: 'user-01',
      gymId: 'gym-01',
      userLatitude: -20.8336121,
      userLongitude: -49.3944832,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in twice a day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      userId: 'user-01',
      gymId: 'gym-01',
      userLatitude: -20.8336121,
      userLongitude: -49.3944832,
    })

    await expect(() =>
      sut.execute({
        userId: 'user-01',
        gymId: 'gym-01',
        userLatitude: -20.8336121,
        userLongitude: -49.3944832,
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it('should be able to check in twice in different days', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      userId: 'user-01',
      gymId: 'gym-01',
      userLatitude: -20.8336121,
      userLongitude: -49.3944832,
    })

    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0))

    const { checkIn } = await sut.execute({
      userId: 'user-01',
      gymId: 'gym-01',
      userLatitude: -20.8336121,
      userLongitude: -49.3944832,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
