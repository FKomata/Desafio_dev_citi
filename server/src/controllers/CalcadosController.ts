import { Request, Response } from "express";
import prisma from "@database";
import Message from "src/global/Message";
import { error } from "console";

export const createShoes = async (req: Request, res: Response) =>
{
    try
    {
        const{nome_produto,cor,marca,tamanho,preco,quantidade_em_estoque} = req.body;

        if(!nome_produto || !cor || !marca || !tamanho || !preco || !quantidade_em_estoque){
            return res.status(404).json({
                Message: "calçado invalido"
            });
        }

        const shoes = await prisma.calcado.create({
            data: {
                nome_produto,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque
            }
        }) 

        return res.status(201).json({
            Message: "calçado criado com sucesso"
        })
    }
    catch
    {
        return res.status(400).json({
            Message: "usuáio inválido",
            error,
        })
    }

}

export const readShoes = async (req: Request , res: Response) =>
{
    try
    {
        const shoes = await prisma.calcado.findMany();

        if (!shoes){
            return res.status(404).json({
                Message: "Não há calçados registrados"
            })
        }

        return res.status(200).json(shoes)
    }
    catch
    {
        return res.status(400).json({
            Message: "nenhum calçado cadastrado"
        })
    }
}