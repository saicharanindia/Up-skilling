# 🔌 Module 3 — C# ADO.NET

[![C#](https://img.shields.io/badge/C%23-12.0-239120?style=flat-square&logo=csharp&logoColor=white)](https://learn.microsoft.com/dotnet/csharp/)
[![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)

> 25 hands-on SQL exercises solving real-world event management data problems using C# ADO.NET — covering complex queries, joins, aggregations, and data analysis.

---

## 📚 All 25 Exercises

| # | Exercise | SQL Concepts |
|---|----------|-------------|
| 1 | User Upcoming Events | Joins, Date filtering |
| 2 | Top Rated Events | ORDER BY, LIMIT, AVG |
| 3 | Inactive Users | LEFT JOIN, IS NULL |
| 4 | Peak Session Hours | GROUP BY, COUNT, time ranges |
| 5 | Most Active Cities | GROUP BY, ORDER BY DESC |
| 6 | Event Resource Summary | Multiple joins, aggregation |
| 7 | Low Feedback Alerts | HAVING, AVG, threshold filtering |
| 8 | Sessions per Upcoming Event | Subquery, COUNT |
| 9 | Organizer Event Summary | GROUP BY organizer, COUNT |
| 10 | Feedback Gap | Subquery, LEFT JOIN, IS NULL |
| 11 | Daily New User Count | DATE(), GROUP BY date |
| 12 | Event with Maximum Sessions | MAX, subquery |
| 13 | Average Rating per City | JOIN, AVG, GROUP BY |
| 14 | Most Registered Events | COUNT, ORDER BY DESC |
| 15 | Event Session Time Conflict | Time overlap logic |
| 16 | Unregistered Active Users | NOT IN, subquery |
| 17 | Multi-Session Speakers | HAVING COUNT > 1 |
| 18 | Resource Availability Check | LEFT JOIN, IS NULL |
| 19 | Completed Events with Feedback Summary | JOIN, aggregate |
| 20 | User Engagement Index | Complex aggregation |
| 21 | Top Feedback Providers | COUNT, JOIN, ORDER BY |
| 22 | Duplicate Registrations Check | GROUP BY, HAVING COUNT > 1 |
| 23 | Registration Trends | DATE grouping, COUNT |
| 24 | Average Session Duration per Event | AVG, TIMEDIFF |
| 25 | Events Without Sessions | LEFT JOIN, IS NULL |

---

## ▶️ How to Run

```bash
# Navigate to any exercise
cd "Module 3 - C# ADO.NET/Exercise 1 - User Upcoming Events"

dotnet restore
dotnet run
```

---

## 🗄️ Database Schema (Event Management System)

```
Users           Events
  └── Registrations (Many-to-Many)
        └── Events
              └── Sessions
                    └── Speakers
                    └── Resources
              └── Feedback
              └── Organizers
```

---

## 🎯 Learning Objectives

- ✅ Connect C# to MySQL using ADO.NET SqlConnection
- ✅ Execute queries using SqlCommand
- ✅ Read results using SqlDataReader
- ✅ Write complex multi-table queries
- ✅ Analyze data with aggregations and window functions
- ✅ Identify data quality issues (duplicates, nulls)

---

## 💡 ADO.NET Pattern Used

```csharp
using var connection = new MySqlConnection(connectionString);
connection.Open();

using var command = new MySqlCommand(query, connection);
using var reader = command.ExecuteReader();

while (reader.Read())
{
    Console.WriteLine(reader["ColumnName"]);
}
```

---

## 🎤 Interview Questions

1. What is ADO.NET and when would you use it over EF Core?
2. What is the difference between `ExecuteReader`, `ExecuteScalar`, and `ExecuteNonQuery`?
3. How do you prevent SQL injection in ADO.NET?
4. What is connection pooling in ADO.NET?
5. What is the difference between `DataSet` and `DataReader`?
6. How do you handle transactions in ADO.NET?

---

## 🔗 References

- [ADO.NET — Microsoft Docs](https://learn.microsoft.com/dotnet/framework/data/adonet/)
- [MySQL Connector for .NET](https://dev.mysql.com/downloads/connector/net/)
