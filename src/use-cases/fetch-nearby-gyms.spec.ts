import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase // SUT (system under test) convenção para nomear a entidade que será testada

describe('Fetch nearby gyms use case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -20.8336121,
      longitude: -49.3944832,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -20.8124285,
      longitude: -49.5110928,
    })

    const { gyms } = await sut.execute({
      userLatitude: -20.8336121,
      userLongitude: -49.3944832,
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })

  it('should be able to fetch paginated nearby gyms', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Near Gym ${i}`,
        description: null,
        phone: null,
        latitude: -20.8336121,
        longitude: -49.3944832,
      })
    }

    const { gyms } = await sut.execute({
      userLatitude: -20.8336121,
      userLongitude: -49.3944832,
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Near Gym 21' }),
      expect.objectContaining({ title: 'Near Gym 22' }),
    ])
  })
})
