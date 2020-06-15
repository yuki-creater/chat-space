class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?
  # application.controllerにbefore_actionをしているので全てのアクションの実行前の一番最初に実行される

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    # deviseを導入していることで devise_parameter_sanitizer.permitが使えるようになっている（これはストロングパラメーターに該当する概念）
    # サインアップ時に入力された「name」キーの内容の保存を許可している
  end
  module ChatSpace
    class Application < Rails::Application
      config.load_defaults 6.0
      config.generators do |g|
        g.stylesheets false
        g.javascripts false
        g.helper false
        g.test_framework false
      end
    end
  end
end
