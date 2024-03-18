### Problema

O setor de assinaturas precisa de um software pra gerenciar assinaturas, e também produtos. Também será preciso aplicar descontos nas assinaturas que representam combo de dois ou mais produtos. A cada novo produto adicionado deve-se aplicar 2.5% de desconto, aplicados somente para até 2 produtos, acima de 2 produtos adicionados o próximo sempre será de 5% de desconto, aplicados somente para mais 3 produtos, caso sejam mais assinaturas o valor, total do produto será aplicado normalmente. Lembrando que espera-se aplicar os descontos ao preço final do combo.

Solucionado com:

- Arquitetura Hexagonal.
- Clean Architecture
- DDD
- TDD

Tabelas (Maria Db)

```
+-----------+--------------+------+-----+---------------------+----------------+
| Field     | Type         | Null | Key | Default             | Extra          |
+-----------+--------------+------+-----+---------------------+----------------+
| id        | int(11)      | NO   | PRI | NULL                | auto_increment |
| name      | varchar(255) | YES  |     | NULL                |                |
| createdAt | timestamp    | YES  |     | current_timestamp() |                |
+-----------+--------------+------+-----+---------------------+----------------+
```

```
+-----------+--------------+------+-----+---------------------+----------------+
| Field     | Type         | Null | Key | Default             | Extra          |
+-----------+--------------+------+-----+---------------------+----------------+
| id        | int(11)      | NO   | PRI | NULL                | auto_increment |
| name      | varchar(255) | YES  |     | NULL                |                |
| price     | int(11)      | YES  |     | NULL                |                |
| createdAt | timestamp    | YES  |     | current_timestamp() |                |
+-----------+--------------+------+-----+---------------------+----------------+
```

```
+-----------+-----------+------+-----+---------------------+----------------+
| Field     | Type      | Null | Key | Default             | Extra          |
+-----------+-----------+------+-----+---------------------+----------------+
| id        | int(11)   | NO   | PRI | NULL                | auto_increment |
| userId    | int(11)   | YES  |     | NULL                |                |
| price     | int(11)   | YES  |     | NULL                |                |
| createdAt | timestamp | YES  |     | current_timestamp() |                |
+-----------+-----------+------+-----+---------------------+----------------+
```
