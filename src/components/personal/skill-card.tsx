import { Skill } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="grid gap-4 hover:border-b-primary hover:border-b-2 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{skill.category}</CardTitle>

        <CardContent className="text-sm px-0 py-2">
          {skill.skillList.match(/[^,s][^,]*[^,s]*/g)?.map((skillItem, i) => (
            <span
              key={i}
              className="inline-block px-2 py-1 m-2 border rounded-md hover:border-foreground cursor-pointer"
            >
              {skillItem}
            </span>
          ))}
        </CardContent>
      </CardHeader>
    </Card>
  );
}
