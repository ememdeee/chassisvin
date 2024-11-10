import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Recall {
  reportReceiptDate: string
  recallNo: string
  components: string
  summary: string
  consequence: string
  remedy: string
  notes: string
}

interface RecallsProps {
  recalls: Recall[]
}

export default function Recalls({ recalls }: RecallsProps) {
  return (
    <Card className="mb-8" id='recalls'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Recalls</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: NHTSA</span>
      </CardHeader>
      <CardContent>
        {recalls.map((recall, index) => (
          <Accordion type="single" collapsible className="mb-4" key={index}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full text-left">
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mb-2 sm:mb-0">
                    <span className="font-medium">{recall.reportReceiptDate}</span>
                    <span className="text-muted-foreground">{recall.recallNo}</span>
                  </div>
                  <span className="font-medium text-sm sm:text-base">{recall.components}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <RecallDetail title="SUMMARY" content={recall.summary} />
                  <RecallDetail title="CONSEQUENCE" content={recall.consequence} />
                  <RecallDetail title="REMEDY" content={recall.remedy} />
                  <RecallDetail title="NOTES" content={recall.notes} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  )
}

function RecallDetail({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm sm:text-base">{content}</p>
    </div>
  )
}