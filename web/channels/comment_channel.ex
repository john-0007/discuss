defmodule Discuss.CommentsChannel do
  use Discuss.Web, :channel

  def join(name, _params, socket) do
    {:ok, %{}, socket}
  end

  def handle_in() do
  end
end
