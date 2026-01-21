"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, ClockAlert, SquarePen, Trash } from 'lucide-react';
import { Badge } from "@/components/ui/badge";



const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa:"/>
          <Button
            className="cursor-pointer bg-blue-600"
            onClick={() => {
              console.log("Olá")
            }}
          >
            <Plus />
            Cadastrar
          </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4"/>
          <div className="flex gap-2">
            <Badge className="cursor-pointer bg-blue-600">
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer bg-blue-600">
              <ClockAlert />
              Não finalizadas
            </Badge>
            <Badge className="cursor-pointer bg-blue-600">
              <Check />
              Concluídas
            </Badge>
          </div>

          <div className="mt-4 border-b-1">

            <div className=" h-14 flex justify-between items-center border-t-1">
              <div className="w-1 h-full bg-green-300" ></div>
              <p className="flex-1 px-2 text-sm" >Estudar React</p>
              <div className="flex items-center gap-2">
                <SquarePen size={16} className="cursor-pointer"/>
                <Trash size={16} className="cursor-pointer" />
              </div>
            </div>

          </div>



        </CardContent>
      </Card>
    </main>
  )
}

export default Home;