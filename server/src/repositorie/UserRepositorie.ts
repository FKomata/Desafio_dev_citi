import prisma from "../database/index";

export const tamanhosCalcados = async(tamanhoDesejado: number) =>
{
        const calcados = await prisma.calcado.findMany({
        where:{
                tamanho : tamanhoDesejado
            } 
        });
        return calcados
}
 