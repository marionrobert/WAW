class PromoController < ApplicationController
  def index
    @products = Product.all.where(discount_price_cents: > 0 )
    # scope :products, -> { where("discount_price_cents > 20") }

  end
end
