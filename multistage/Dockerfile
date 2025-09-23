#stage 1 build
FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build-env
WORKDIR /App
COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

#stage 2 release app
FROM mcr.microsoft.com/dotnet/runtime:8.0-alpine
WORKDIR /App
COPY --from=build-env /App/out .
ENTRYPOINT ["dotnet", "MultiStage.dll"]