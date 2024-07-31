import { beforeEach, describe, expect, it } from 'vitest'

import { CreateGymUseCase } from './create-gym'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase // SUT (system under test) convenção para nomear a entidade que será testada

describe('Create gym use case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'Serjão dos foguetes',
      description: null,
      phone: null,
      latitude: -20.8336121,
      longitude: -49.3944832,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
