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


export const quantidadePares = async () => 
{
    const quantidadePares = await prisma.calcado.findMany();
    
    let qTotal = 0

    for(let calcado of quantidadePares){
        qTotal += calcado.quantidade_em_estoque;
    }

    return qTotal;
}
