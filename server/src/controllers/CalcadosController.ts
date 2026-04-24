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
    catch(error)
    {
        return res.status(400).json({
            Message: "usuáio inválido",
            error,
        })
    }

}

export const readAllShoes = async (req: Request , res: Response) =>
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
    catch(error)
    {
        return res.status(400).json({
            Message: "nenhum calçado cadastrado",
            error
        })
    }
}

export const updateShoes = async(req: Request , res: Response) =>
{
    try
    {
        const { id } = req.params;
        const {nome_produto,cor,marca,tamanho,preco,quantidade_em_estoque} = req.body;

        const calcadotualizado = await prisma.calcado.update({
            where:
            {
                id: Number(id)
            },
            data:{
                nome_produto,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque
            }
        })
        
        return res.status(200).json(calcadotualizado)
    }
    catch(error)
    {
        return res.status(500).json({
            message: "Não foi possivel atualizar o produto",
            error
        })
    }
}

export const deleteShoes = async(req: Request , res: Response) => 
{
    try
    {
        const { id } = req.params;
        const{nome_produto,cor,marca,tamanho,preco,quantidade_em_estoque} = req.body;

        const calcadoDeletado = await prisma.calcado.delete({
            where:
            {
                id: Number(id)
            },
        })
        return res.status(200).json({
            message: "calçado excluido com sucesso",
            calcadoDeletado
        })
    }

    catch(error)
    {
        return res.status(500).json({
            message: "operação de exclusão mal sucedida",
            error
        })
    }

    
}

