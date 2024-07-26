import { PrismaClient } from "@repo/db/client";
import {Button} from "../../../packages/ui/src/button";

const client = new  PrismaClient();


export default function Home() {
  return (
    <div className="text-3xl" >
      <h1>Hi here </h1>
      <Button  />
    </div>
  );
}
