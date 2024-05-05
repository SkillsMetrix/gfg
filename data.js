db.Student.aggregate ([
   {
      "$group":
      {
         "_id":
         {
            "Section" : "$Section"
         },
         "TotalMarks":
         {
            "$sum": "$Marks"
         },
         "Count":{ "$sum" : 1},
         "Average" : {"$avg" : "$Marks"}
      }
   },
   {
       "$project" : 
       {
           "SectionName" : "$_id.Section",
           "Total" : "$TotalMarks"
       }
   },
   {
       "$sort":{"SectionName":-1}
   }
])

