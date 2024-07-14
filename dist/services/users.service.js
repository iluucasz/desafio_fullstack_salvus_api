"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const tsyringe_1 = require("tsyringe");
const db_1 = require("../database/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_schema_1 = require("../schemas/users.schema");
const AppError_error_1 = require("../errors/AppError.error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let UsersService = class UsersService {
    constructor() {
        this.register = (body) => __awaiter(this, void 0, void 0, function* () {
            const hashPassword = yield bcrypt_1.default.hash(body.password, 8);
            const user = Object.assign(Object.assign({}, body), { password: hashPassword });
            const createUser = yield db_1.prisma.users.create({ data: user });
            return users_schema_1.userReturn.parse(createUser);
        });
        this.login = (body) => __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.prisma.users.findUnique({ where: { email: body.email } });
            if (!user) {
                throw new AppError_error_1.AppError(404, 'User Not Registered');
            }
            const compare = yield bcrypt_1.default.compare(body.password, user.password);
            if (!compare) {
                throw new AppError_error_1.AppError(401, 'Email/Password invalid');
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.SECRET_KEY);
            return { AcessToken: token, user: users_schema_1.userReturn.parse(user) };
        });
        this.getUser = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.prisma.users.findUnique({ where: { id } });
            return users_schema_1.userReturn.parse(user);
        });
        this.getAllUser = () => __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.prisma.users.findMany();
            return users_schema_1.userReturnAll.parse(user);
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, tsyringe_1.injectable)()
], UsersService);
