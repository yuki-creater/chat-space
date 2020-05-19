class AddEmailToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :email, :string
    add_index :users, :email, unique: true #unique: trueで他に同じeメールアドレスを保存させないようにする
  end
end
