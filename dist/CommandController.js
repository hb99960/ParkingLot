export class CommandController {
    parkingLotController;
    constructor(parkingLotController) {
        this.parkingLotController = parkingLotController;
    }
    executeCommand(command, ...args) {
        switch (command) {
            case `create_parking_lot`:
                return this.parkingLotController.createParkingLot(...args);
            case `park_vehicle`:
                return this.parkingLotController.parkVehicle(...args);
            case `unpark_vehicle`:
                return this.parkingLotController.unparkVehcile(...args);
            case `display`:
                return this.parkingLotController.display(...args);
            default:
                return `Invalid Command`;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ29tbWFuZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixvQkFBb0IsQ0FBdUI7SUFFM0MsWUFBWSxvQkFBeUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO0lBQ3JELENBQUM7SUFFRCxjQUFjLENBQUMsT0FBYyxFQUFFLEdBQUcsSUFBeUI7UUFHdkQsUUFBTyxPQUFPLEVBQUMsQ0FBQztZQUNaLEtBQUssb0JBQW9CO2dCQUNyQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQWdDLENBQUMsQ0FBQTtZQUMxRixLQUFLLGNBQWM7Z0JBQ2YsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBZ0MsQ0FBQyxDQUFDO1lBQ3RGLEtBQUssZ0JBQWdCO2dCQUNqQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFnQixDQUFDLENBQUM7WUFDeEUsS0FBSyxTQUFTO2dCQUNWLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQXdCLENBQUMsQ0FBQztZQUMxRTtnQkFDSSxPQUFPLGlCQUFpQixDQUFDO1FBRWpDLENBQUM7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJraW5nTG90Q29udHJvbGxlciB9IGZyb20gXCIuL1BhcmtpbmdMb3RDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kQ29udHJvbGxlcntcbiAgICBwYXJraW5nTG90Q29udHJvbGxlcjogUGFya2luZ0xvdENvbnRyb2xsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJraW5nTG90Q29udHJvbGxlcjpQYXJraW5nTG90Q29udHJvbGxlcil7XG4gICAgICAgIHRoaXMucGFya2luZ0xvdENvbnRyb2xsZXIgPSBwYXJraW5nTG90Q29udHJvbGxlcjtcbiAgICB9XG5cbiAgICBleGVjdXRlQ29tbWFuZChjb21tYW5kOnN0cmluZywgLi4uYXJnczpBcnJheTxzdHJpbmd8bnVtYmVyPil7XG5cblxuICAgICAgICBzd2l0Y2goY29tbWFuZCl7XG4gICAgICAgICAgICBjYXNlIGBjcmVhdGVfcGFya2luZ19sb3RgOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmtpbmdMb3RDb250cm9sbGVyLmNyZWF0ZVBhcmtpbmdMb3QoLi4uYXJncyBhcyBbc3RyaW5nLCBudW1iZXIsIG51bWJlcl0pXG4gICAgICAgICAgICBjYXNlIGBwYXJrX3ZlaGljbGVgOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmtpbmdMb3RDb250cm9sbGVyLnBhcmtWZWhpY2xlKC4uLmFyZ3MgYXMgW3N0cmluZywgc3RyaW5nLCBzdHJpbmddKTtcbiAgICAgICAgICAgIGNhc2UgYHVucGFya192ZWhpY2xlYDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJraW5nTG90Q29udHJvbGxlci51bnBhcmtWZWhjaWxlKC4uLmFyZ3MgYXMgW3N0cmluZ10pO1xuICAgICAgICAgICAgY2FzZSBgZGlzcGxheWA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFya2luZ0xvdENvbnRyb2xsZXIuZGlzcGxheSguLi5hcmdzIGFzIFtzdHJpbmcsIHN0cmluZ10pO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gYEludmFsaWQgQ29tbWFuZGA7XG5cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=