import ViewAll from "@/ui/button/viewAll";
import Profile from "@/ui/profile/profile";
import SearchUserSkeleton from "@/ui/search/loading";
import Search from "@/ui/search/search";
import UserSearch from "@/ui/search/userSearch";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    username?: string;
  };
}) {
  const query = searchParams?.q || "";
  const username = searchParams?.username || "";

  return (
    <main>
      <div className="bg-20293A w-full h-screen overflow-auto">
        <div className="flex flex-col items-center">
          <Search />

          {query && (
            <Suspense fallback={<SearchUserSkeleton />}>
              <UserSearch query={query} />
            </Suspense>
          )}

          <Profile username={username} />
          <ViewAll/>
        </div>
      </div>
    </main>
  );
}
