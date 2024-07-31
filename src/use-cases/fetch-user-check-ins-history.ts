import { CheckIn } from '@prisma/client'

import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface FetchUserCheckInHistoryUseCaseRequest {
  userId: string
}

interface FetchUserCheckInHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInHistoryUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private checkInsRepository: CheckInsRepository) { }

  async execute({
    userId,
  }: FetchUserCheckInHistoryUseCaseRequest): Promise<FetchUserCheckInHistoryUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(userId)

    return {
      checkIns,
    }
  }
}
