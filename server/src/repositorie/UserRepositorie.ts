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
 
export const marcasCalcados = async(marcaDesjada: string) =>
{
        const calcados = await prisma.calcado.findMany({
        where:{
                marca : marcaDesjada
            } 
        });
        return calcados

}

