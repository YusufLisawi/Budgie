import React, { useContext } from "react";

export default function Table({ rows }) {
  const TD = "py-3 px-6 whitespace-nowrap";
  return (
    <div className="overflow-x-auto relative rounded-xl">
      <table class="w-full text-sm text-left rounded-t">
        <thead class="text-xs uppercase bg-yellow-main text-brown-main font-extrabold">
          <tr>
            <th scope="col" class={TD}>
              Description
            </th>
            <th scope="col" class={TD}>
              Cost
            </th>
            <th scope="col" class={TD}>
              Category
            </th>
            <th scope="col" class={TD}>
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {rows
            .map((exp) => (
              <tr className="border-b">
                <th scope="row" class={TD + "font-medium"}>
                  {exp.description}
                </th>
                <td className={TD}>{exp.cost} DH</td>
                <td className={TD}>{exp.category}</td>
                <td className={TD}>{exp.date}</td>
              </tr>
            ))
            .reverse()}
        </tbody>
      </table>
      
    </div>
  );
}
