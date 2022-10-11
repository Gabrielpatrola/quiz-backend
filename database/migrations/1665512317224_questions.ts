import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'questions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('category').notNullable()
      table.string('question').notNullable()
      table.string('correct_answer').notNullable()
      table.enu('difficulty', ['easy', 'medium', 'hard']).notNullable()
      table.json('incorrect_answers').notNullable()
      table.enu('type', ['multiple', 'boolean']).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
