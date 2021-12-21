import os

#print(os.listdir())

for arq in os.listdir():
    if (arq.endswith(".svg")):
        arq_modif = "Pokémon_"+arq[:-4].capitalize()+"_Type_Icon.svg"
        print(arq_modif)
        os.rename(arq,arq_modif)

