// eslint-disable-next-line react/no-children-prop
import Image from "next/image";
import {Button} from "../../../packages/ui/src/button";
export default function Home() {
  return (
    <div className="text-3xl" >
      <h1>Hi here </h1>
      <Button appName={""}>
        {undefined}
      </Button>
    </div>
  );
}
