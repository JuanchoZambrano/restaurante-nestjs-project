import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaService } from '../prisma/prisma.service.js'
import { RegisterDto } from './dto/register.usuario.dto.js'
import { LoginDto } from './dto/login.usuario.dto.js'

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    const passwordHash = await bcrypt.hash(dto.password, 10)
    return this.prisma.usuario.create({
      data: { ...dto, password: passwordHash },
      select: { id: true, nombre: true, correo: true, rol: true }
    })
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.usuario.findUnique({ where: { correo: dto.correo } })
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Credenciales inválidas')
    }
    const token = jwt.sign(
      { id: user.id, correo: user.correo, rol: user.rol },
      process.env.JWT_SECRET as string,
      { expiresIn: '8h' }
    )
    return { token }
  }
}