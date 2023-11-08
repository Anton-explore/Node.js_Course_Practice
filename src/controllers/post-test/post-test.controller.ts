import type { Request, Response } from 'express'
import { HttpError } from '../../errors/http-error'
import { APIErrors } from '../../enums/API-errors.enum'

const getPostTestResponse = (req: Request, res: Response): void => {
  const requestText: string | undefined = req.body.text
  if (requestText === undefined || requestText === null) {
    throw new HttpError(
      APIErrors.BAD_REQUEST,
      400
    )
  }

  res.status(200).json({ data: requestText })
}

export { getPostTestResponse }
